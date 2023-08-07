import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S134192Page } from './s134192.page';

describe('S134192Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S134192Page;
  let fixture: ComponentFixture<S134192Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S134192Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S134192Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
