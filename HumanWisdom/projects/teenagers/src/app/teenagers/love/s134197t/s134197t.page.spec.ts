import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S134197tPage } from './s134197t.page';

describe('S134197tPage', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S134197tPage;
  let fixture: ComponentFixture<S134197tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S134197tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S134197tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
