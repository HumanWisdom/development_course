import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S63064Page } from './s63064.page';

describe('S63064Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S63064Page;
  let fixture: ComponentFixture<S63064Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S63064Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S63064Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
