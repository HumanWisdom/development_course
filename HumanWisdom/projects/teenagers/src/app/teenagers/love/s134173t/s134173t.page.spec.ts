import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S134173tPage } from './s134173t.page';

describe('S134173tPage', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S134173tPage;
  let fixture: ComponentFixture<S134173tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S134173tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S134173tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
