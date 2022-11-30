import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S18004Page } from './s18004.page';

describe('S18004Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S18004Page;
  let fixture: ComponentFixture<S18004Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S18004Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S18004Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
