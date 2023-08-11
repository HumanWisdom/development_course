import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S134175tPage } from './s134175t.page';

describe('S134175tPage', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S134175tPage;
  let fixture: ComponentFixture<S134175tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S134175tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S134175tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
