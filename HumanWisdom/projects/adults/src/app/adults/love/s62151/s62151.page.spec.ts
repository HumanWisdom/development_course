import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S62151Page } from './s62151.page';

describe('S62151Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S62151Page;
  let fixture: ComponentFixture<S62151Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S62151Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S62151Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
