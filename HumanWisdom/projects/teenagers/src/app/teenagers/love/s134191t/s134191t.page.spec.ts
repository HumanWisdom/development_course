import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S134191tPage } from './s134191t.page';

describe('S134191tPage', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S134191tPage;
  let fixture: ComponentFixture<S134191tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S134191tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S134191tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
