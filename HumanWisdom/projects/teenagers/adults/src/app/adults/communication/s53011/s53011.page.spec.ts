import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S53011Page } from './s53011.page';

describe('S53011Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S53011Page;
  let fixture: ComponentFixture<S53011Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S53011Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S53011Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
