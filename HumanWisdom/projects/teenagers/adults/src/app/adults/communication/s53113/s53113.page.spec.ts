import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S53113Page } from './s53113.page';

describe('S53113Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S53113Page;
  let fixture: ComponentFixture<S53113Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S53113Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S53113Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
