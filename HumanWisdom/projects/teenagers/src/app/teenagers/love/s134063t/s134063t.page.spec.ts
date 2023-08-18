import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S134063tPage } from './s134063t.page';

describe('S134063tPage', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S134063tPage;
  let fixture: ComponentFixture<S134063tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S134063tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S134063tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
