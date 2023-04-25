import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S106004Page } from './s106004.page';

describe('S106004Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S106004Page;
  let fixture: ComponentFixture<S106004Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S106004Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S106004Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
