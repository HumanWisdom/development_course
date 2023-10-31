import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S53233Page } from './s53233.page';

describe('S53233Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S53233Page;
  let fixture: ComponentFixture<S53233Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S53233Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S53233Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
