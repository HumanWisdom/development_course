import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S53240tPage } from './s53240t.page';

describe('S53240tPage', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S53240tPage;
  let fixture: ComponentFixture<S53240tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S53240tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S53240tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
