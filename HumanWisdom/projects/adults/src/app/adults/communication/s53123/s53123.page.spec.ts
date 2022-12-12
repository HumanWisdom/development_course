import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S53123Page } from './s53123.page';

describe('S53123Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S53123Page;
  let fixture: ComponentFixture<S53123Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S53123Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S53123Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
