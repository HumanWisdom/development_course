import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S62110Page } from './s62110.page';

describe('S62110Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S62110Page;
  let fixture: ComponentFixture<S62110Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S62110Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S62110Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
