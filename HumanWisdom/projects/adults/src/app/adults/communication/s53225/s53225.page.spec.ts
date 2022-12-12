import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S53225Page } from './s53225.page';

describe('S53225Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S53225Page;
  let fixture: ComponentFixture<S53225Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S53225Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S53225Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
