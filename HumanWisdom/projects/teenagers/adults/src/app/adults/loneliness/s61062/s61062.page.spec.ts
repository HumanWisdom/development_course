import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S61062Page } from './s61062.page';

describe('S61062Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S61062Page;
  let fixture: ComponentFixture<S61062Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S61062Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S61062Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
