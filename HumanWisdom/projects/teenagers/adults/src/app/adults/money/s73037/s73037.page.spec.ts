import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S73037Page } from './s73037.page';

describe('S73037Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S73037Page;
  let fixture: ComponentFixture<S73037Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S73037Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S73037Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
