import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S53181Page } from './s53181.page';

describe('S53181Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S53181Page;
  let fixture: ComponentFixture<S53181Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S53181Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S53181Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
