import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S140064Page } from './s140064.page';

describe('S140064Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S140064Page;
  let fixture: ComponentFixture<S140064Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S140064Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S140064Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
