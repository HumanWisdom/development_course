import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S53062Page } from './s53062.page';

describe('S53062Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S53062Page;
  let fixture: ComponentFixture<S53062Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S53062Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S53062Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
