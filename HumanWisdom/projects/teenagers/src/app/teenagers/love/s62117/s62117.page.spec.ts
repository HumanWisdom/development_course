import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S62117Page } from './s62117.page';

describe('S62117Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S62117Page;
  let fixture: ComponentFixture<S62117Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S62117Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S62117Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
