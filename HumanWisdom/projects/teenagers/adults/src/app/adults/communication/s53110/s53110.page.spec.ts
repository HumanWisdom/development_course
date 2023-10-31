import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S53110Page } from './s53110.page';

describe('S53110Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S53110Page;
  let fixture: ComponentFixture<S53110Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S53110Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S53110Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
