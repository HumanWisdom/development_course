import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S132226Page } from './s132226.page';

describe('S132226Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S132226Page;
  let fixture: ComponentFixture<S132226Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S132226Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S132226Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
