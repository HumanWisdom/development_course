import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S59064Page } from './s59064.page';

describe('S59064Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S59064Page;
  let fixture: ComponentFixture<S59064Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S59064Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S59064Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
