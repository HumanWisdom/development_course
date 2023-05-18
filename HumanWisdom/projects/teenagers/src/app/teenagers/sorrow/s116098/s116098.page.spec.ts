import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S116098Page } from './s116098.page';

describe('S116098Page', () => {
      
    let component:  S116098Page;
  let fixture: ComponentFixture<S116098Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S116098Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S116098Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
