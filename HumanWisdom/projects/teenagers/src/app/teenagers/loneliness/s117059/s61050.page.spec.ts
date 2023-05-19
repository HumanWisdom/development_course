import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S61170Page } from './s61170.page';

describe('S61170Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S61170Page;
  let fixture: ComponentFixture<S61170Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S61170Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S61170Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
