import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S62111Page } from './s62111.page';

describe('S62111Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S62111Page;
  let fixture: ComponentFixture<S62111Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S62111Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S62111Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
