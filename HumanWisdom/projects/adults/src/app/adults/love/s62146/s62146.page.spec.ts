import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S62146Page } from './s62146.page';

describe('S62146Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S62146Page;
  let fixture: ComponentFixture<S62146Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S62146Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S62146Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
