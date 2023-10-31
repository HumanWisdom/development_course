import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S53108Page } from './s53108.page';

describe('S53108Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S53108Page;
  let fixture: ComponentFixture<S53108Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S53108Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S53108Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
