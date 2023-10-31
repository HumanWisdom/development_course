import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S53007Page } from './s53007.page';

describe('S53007Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S53007Page;
  let fixture: ComponentFixture<S53007Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S53007Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S53007Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
